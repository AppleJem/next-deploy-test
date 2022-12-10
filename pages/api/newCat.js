async function handler(req, res) {
    if (req.method === "POST" ) {
        const data = req.body;
        const {name, description, image} = data;
        const firebaseData = await fetch('https://react-learn-a42a7-default-rtdb.asia-southeast1.firebasedatabase.app/cats.json', {
            method:"POST",
            body:JSON.stringify(data)
        });
        const parsedData = await firebaseData.json();
        console.log(parsedData);
        console.log(typeof req.body);
        
        res.status(200).json({returnMsg:"backend api data returned succesfully"})
    }
}

export default handler;