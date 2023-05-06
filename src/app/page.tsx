import { styled } from "@linaria/react";
import {
  deleteOneFromFire,
  readManyFromFire,
  writeOneToFire,
} from "../server/firebase.server";
import { revalidatePath } from "next/cache";

const SH1 = styled.h1`
  color: red;
  background-color: lightblue;
`;

export const deleteFromDb = async (formData: FormData): string => {
  "use server";
  const { id } = Object.fromEntries(formData as any);
  await deleteOneFromFire("test", id);

  revalidatePath("/");
};

export const readFromDb = async () => {
  "use server";

  return await readManyFromFire("test");
};

export const saveToDb = async (formData: FormData): string => {
  "use server";
  const { name, age } = Object.fromEntries(formData as any);
  await writeOneToFire("test", { name, age });

  revalidatePath("/");
};

export default async function Index() {
  const list: {
    name: string;
    age: string;
    docid: string;
  }[] = await readFromDb();
  return (
    <div>
      <SH1>blog</SH1>
      <form action={saveToDb}>
        <div>
          <input type="text" name="name" />
        </div>

        <div>
          <input type="number" name="age" />
        </div>

        <div>
          <button>save</button>
        </div>
      </form>

      <h1>List</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {list.map(({ age, docid, name }) => (
          <div key={docid}>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>ID: {docid}</div>

            <form action={deleteFromDb}>
              <button type="submit">&times;</button>
              <input type="hidden" name="id" value={docid} />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
