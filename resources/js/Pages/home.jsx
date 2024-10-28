import { Head, Link } from '@inertiajs/react';
import Menu from '../Layouts/Menu';
import LandingBanner from '../Components/LandingBanner';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name='description' content='Pagina De Hayliv Make Up'/>
            </Head>
            
            <Menu />

            <LandingBanner />

        </>
    );
}
