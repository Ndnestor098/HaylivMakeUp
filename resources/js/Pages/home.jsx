import { Head, Link } from '@inertiajs/react';
import Menu from '../Layouts/Menu';
import LandingBanner from '../Components/LandingBanner';
import CardLayout from '../Components/CardLayout';

export default function Welcome({  }) {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name='description' content='Pagina De Hayliv Make Up'/>
            </Head>
            
            <Menu />

            <LandingBanner />

            <CardLayout />
        </>
    );
}
