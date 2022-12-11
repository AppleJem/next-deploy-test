import { useRouter } from "next/router";

function CatDetails(props) {
    const router = useRouter();
    console.log(props.catData);
    return <>
    <p>This is an individual cat page</p>
        {/* <h1>This cat's name is {props.catData.name}</h1> */}
        {/* <p>{props.catData}</p> */}
        {/* <img src={props.catData.image} alt="Cat image" /> */}
        {/* <p>{props.catData.description}</p> */}
    </>
}

export async function getStaticPaths() {
    //The page is pregenerated. This manes that next js will need to generate all possible versions of this page in advance
    //since this page is supposed to be dynamic
    return {
        paths: [
            {
                params: {
                    catId: 'a1',
                }
            },
            {
                params: {   
                    catId: 'k1',
                },
            }
        ],
        fallback: true,
    }

}

export function getStaticProps(context) {

    const catId = context.params.catId
    return {
        props: {
            catData: {
                id: catId,
                name: 'Dondon',
                image: 'https://cdn2.thecatapi.com/images/3lo.jpg',
                description: 'A friendly cat that loves snackies!'
            }
        }
    }
}

export default CatDetails;