import { handleForm } from "@/actions/test.action";

export default function FormTest() {
  return (
    <div className="container">

        <div>FormTest</div>
        <form action={handleForm}>
            <label htmlFor="username">UserName:: </label>
            <input type="text" name="username" />

            <label htmlFor="password">password:: </label>
            <input type="text" name="password" />

            <button className="border p-4 ml-4">Submit</button>
        </form>
    </div>
  )
}