import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { increment } from "firebase/database";
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, updateDoc, where, orderBy, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyANFhP14_BJOaImr50PiFoychlbR88JeXU",
  authDomain: "powerking-betting-tips.firebaseapp.com",
  databaseURL: "https://powerking-betting-tips-default-rtdb.firebaseio.com",
  projectId: "powerking-betting-tips",
  storageBucket: "powerking-betting-tips.appspot.com",
  messagingSenderId: "617291483997",
  appId: "1:617291483997:web:e3114cc5c5fa03d9d7b6b4",
  measurementId: "G-57VGM61EY8"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);
//await enableIndexedDbPersistence(db);
const analytics = getAnalytics(app);

export const signInUser = (email, password, setError) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    alert(`User with ${user.email} has logged in successfully`);
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
  return;
}

const addUser = async (data, setSuccess, setError) => {
  const userDocRef = doc(db, "users", data.email);
  const userDoc = await getDoc(userDocRef);
  if (userDoc.exists()) {
    return setError("The user already exists! Login insted.");
  }
  await setDoc(userDocRef, {...data}).then(async (response) => {
    setSuccess(`User with ${data.email} has been registered successfully`)
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
  console.log(data)
  return;
};

export const registerUser = (username, email, password, setSuccess, setError) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    addUser({
      email: user.email,
      username: username,
      isPremium: false, 
      subscription: null
    }, setSuccess, setError)
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
  return;
}

export const updateUser = async (userId, isPremium, subscription) => {
  const usercollref = doc(db,'users', userId)
  updateDoc(usercollref,{
    isPremium, 
    subscription,
    subDate: new Date().toLocaleDateString()
  } ).then(response => {
    alert("updated")
  }).catch(error =>{
    console.log(error.message)
  })
}

export const getuser = async (userId) => {
  const userDocRef = doc(db, "users", userId);
  const userDoc = await getDoc(userDocRef);
  if (userDoc.exists()) {
    console.log(userDoc.data())
  } else{
    console.log("This user was not found")
  }
  return;
};

export const getNews= async (pagination, category, setNews, setLoading) => {
  setLoading(true);
  const newsCollectionRef = collection(db, "news");
  var q = query(newsCollectionRef, orderBy("timestamp", "desc"), limit(pagination));
  if(category !== 'all'){
    q = query(newsCollectionRef, where('category', '==', category), orderBy("timestamp", "desc"), limit(pagination));
  }
  
  const news = [];
  await getDocs(q).then((data) => {
    data.forEach((doc) => {
     news.push({id: doc.id,...doc.data()});
    });
  }).then(() => {
    setNews(news);
    setLoading(false);
  }).catch(err => setLoading(false));
};

export const getNewsItem = async (newsId, setNewsItem, setLoading) => {
  setNewsItem(null);
  setLoading(true);
  const newsDocRef = doc(db, "news", newsId);
  const newsDoc = await getDoc(newsDocRef);
  if (newsDoc.exists()) {
    setNewsItem({id: newsDoc.id, ...newsDoc.data()})
  }
  setLoading(false);
  return;
};

export const addNewsViews = async (newsId) => {
  const newsDocRef = doc(db, "news", newsId);
  const newsDoc = await getDoc(newsDocRef);
  if (newsDoc.exists()) {
    try {
      await updateDoc(newsDocRef, {
        views: increment(1)
      });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }
  return;
};

export const addContact = async (data, setSuccess, setError) => {
  const contactsDocRef = collection(db, "contacts");
  await addDoc(contactsDocRef, {...data, responded: false}).then(async (userCredential) => {
    setSuccess("We will get back to you as soon as possible.")
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
};

export const addMailList = async (data, setSuccess, setError) => {
  const mailDocRef = doc(db, "mail-list", data.email);
  const mailDoc = await getDoc(mailDocRef);
  if (mailDoc.exists()) {
    return setError("The email already exists! Try a new one");
  }
  await setDoc(mailDocRef, {...data}).then(async (response) => {
    setSuccess("You are now subscribe to our newsletter.")
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
  return;
};

export  const addNews = async (data, setError, setLoading) => {
  setLoading(true);
  const newsDocRef = collection(db, "news");
  if (data.image) {
    const imageRef = ref(storage, `blogs/${data.image.name.split(" ").join("_")}`);
    const metadata = {
        contentType: 'blogs/jpeg',
    };
    await uploadBytes(imageRef, data.image, metadata).then((response) => {
      return getDownloadURL(response.ref);
    }).then(async(downloadURL) => {
      await addDoc(newsDocRef, {
        title: data.title,
        description: data.description,
        category: data.category,
        imageUrl: downloadURL,
        timestamp: new Date().toLocaleDateString()
      }).then(async (docRef) => {
        window.location.replace(`/blogs/${docRef.id}`);
      }).catch(async (error) => {
        setError(error.message);
        setLoading(false);
      });
    })
  } else {
    alert('Please} upload an image');
    setLoading(false);
  };
  
};

export const getTips= async (pagination, date, setTips, setLoading) => {
  setLoading(true);
  
  const tipsCollectionRef = collection(db, "tips");
  //var q = query(tipsCollectionRef, where("date", "==", new Date().toLocaleDateString()), orderBy("date", "desc"), limit(pagination));
  var q = query(tipsCollectionRef, limit(pagination))//,  where('date', '==', date));

  const tips = [];
  await getDocs(q).then((data) => {
    data.forEach((doc) => {
     tips.push({id: doc.id,...doc.data()});
    });
  }).then(() => {
    setTips(tips);
    setLoading(false);
  }).catch(err => setLoading(false));
};