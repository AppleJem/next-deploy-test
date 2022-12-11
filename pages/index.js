import Head from 'next/head';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import CatList from '../components/catList/CatList';


const DUMMY_CATS = [
  {
    id: 'a1',
    name: 'Dondon',
    image: 'https://cdn2.thecatapi.com/images/3lo.jpg',
    description: 'A friendly cat that loves snackies!'
  },
  {
    id: 'k1',
    name: 'Pudding',
    image: 'https://cdn2.thecatapi.com/images/5co.jpg',
    description: "Affectionate and lively, warms people's hearts."
  }
]

export default function Home(props) {

  return (<>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>A web app to showcase your catz</p>
      <CatList catsArr={props.cats} />
    </section>
  </>
  );
}

export async function getStaticProps() { 

  return {
    props: {
      cats: DUMMY_CATS
    },
    revalidate: 10
  }
}