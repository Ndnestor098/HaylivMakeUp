import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';


export default function Dashboard() {
    const [ modeDark, setModeDark ] = useState(false);

    useEffect(()=>{
        console.log(modeDark)
        if (modeDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },[modeDark])

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="w-48 aspect-video rounded-xl has-[:checked]:bg-[#3a3347] bg-[#ebe6ef] border-4 border-[#121331]">
                                <div className="flex h-full w-full px-2 items-center gap-x-2">
                                    <div
                                    className="w-6 h-6 flex-shrink-0 rounded-full border-4 border-[#121331]"
                                    ></div>
                                    <label htmlFor="switch" className="has-[:checked]:scale-x-[-1] w-full h-10 border-4 border-[#121331] rounded cursor-pointer">
                                        <input type="checkbox" onChange={e=>setModeDark(!modeDark)} id="switch" className="hidden" />
                                        <div className="w-full h-full bg-[#f24c00] relative">
                                            <div
                                            className="w-0 h-0 z-20 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[20px] border-t-[#121331] relative"
                                            >
                                            <div
                                                className="w-0 h-0 absolute border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[15px] border-t-[#e44901] -top-5 -left-[18px]"
                                            ></div>
                                            </div>
                                            <div
                                            className="w-[24px] h-9 z-10 absolute top-[9px] left-0 bg-[#f24c00] border-r-2 border-b-4 border-[#121331] transform skew-y-[39deg]"
                                            ></div>
                                            <div
                                            className="w-[25px] h-9 z-10 absolute top-[9px] left-[24px] bg-[#c44002] border-r-4 border-l-2 border-b-4 border-[#121331] transform skew-y-[-39deg]"
                                            ></div>
                                        </div>
                                    </label>
                                    <div className="w-6 h-1 flex-shrink-0 bg-[#121331] rounded-full"></div>
                                </div>
                            </div>
                            <p>Current Mode: {modeDark ? 'Light' : 'Dark'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
