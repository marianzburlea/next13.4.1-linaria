import * as admin from "firebase-admin";
import type { ServiceAccount } from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    } as ServiceAccount),
  });
}

export const writeOneToFire = async (
  tableName = "change-me",
  info: any,
  id = "",
  merge = true
) => {
  const table = `${process.env.FIREBASE_DB_PREFIX}${tableName}`;
  if (id) {
    await admin.firestore().collection(table).doc(id).set(info, { merge });
  } else {
    await admin.firestore().collection(table).add(info);
  }

  return {};
};

export const readOneFromFire = async (tableName = "change-me", id = "") => {
  const table = `${process.env.FIREBASE_DB_PREFIX}${tableName}`;
  const docSnap = await admin.firestore().collection(table).doc(id).get();

  return {
    ...docSnap.data(),
    // createTime: docSnap.createTime,
    // updateTime: docSnap.updateTime,
  };
};

export const deleteOneFromFire = async (tableName = "change-me", id = "") => {
  const table = `${process.env.FIREBASE_DB_PREFIX}${tableName}`;

  await admin.firestore().collection(table).doc(id).delete();
};

export const readManyFromFire = async (tableName = "change-me", limit = 10) => {
  const table = `${process.env.FIREBASE_DB_PREFIX}${tableName}`;
  const snap = await admin.firestore().collection(table).limit(limit).get();

  return snap.docs.map((doc) => ({
    ...doc.data(),
    docid: doc.id,
    // createTime: doc.createTime,
    // updateTime: doc.updateTime,
  }));
};

export default admin;
