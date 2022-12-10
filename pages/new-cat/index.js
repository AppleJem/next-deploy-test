import { useRouter } from "next/router";

import Layout from "../../components/layout"

function NewCat() {
    const router = useRouter();

    async function addNewCatHandler(event) {
        event.preventDefault();
        const response = await fetch('/api/newCat', {
            method: "POST",
            body: JSON.stringify({
                message: "message 2"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })  

        const data = await response.json();
        console.log(data)
        router.push('/')
    }

    return <section>
        <h1>Add a new cat</h1>
        <form onSubmit={addNewCatHandler}>
            <label htmlFor="">name</label>
            <input type="text" />
            <label htmlFor="">Description</label>
            <input type="text" />
            <label htmlFor="">Image</label>
            <input type="text" />
            <input type="submit" />
        </form>
    </section>
}

export default NewCat;