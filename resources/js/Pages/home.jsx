import { Head, Link } from '@inertiajs/react';
import Menu from '../Layouts/Menu';
import LandingBanner from '../Components/LandingBanner';
import CardLayout from '../Components/CardLayout';
import WorkSection from '@/Components/WorkSection';
import CommentsSection from '@/Components/CommentsSection';
import Footer from '@/Layouts/Footer';

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
            
            <WorkSection />

            <CommentsSection />

            <Footer />
        </>
    );
}
