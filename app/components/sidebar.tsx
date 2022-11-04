import logo from '../assets/logo.png';

export default function SideBar() {
    return (
        <>
            <aside className="w-64 h-screen border-r border-r-indigo-500" style={{ width: '100%', maxWidth: '290px' }} aria-label="Sidebar">
                <div className="flex flex-col h-screen overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                    <a href="/" className="flex items-center pl-2.5 mb-5">
                        <img src={logo} className="mr-3 h-6 sm:h-7" alt="Find Assister Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Find Assister</span>
                    </a>
                    <ul className="space-y-2 h-5/6">
                        <li>
                            <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i className="fa-solid fa-hammer"></i>
                                <span className="ml-3">Serviços</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-2 mt-auto">
                        <li className='flex w-full'>
                            <a href='#' className="rounded-full flex w-full items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" data-modal-toggle="authentication-modal">
                                <i className="fa-solid fa-right-to-bracket mr-4"></i>
                                Entrar
                            </a> 
                        </li>
                        <li className='flex w-full'>
                            <a href='#' className="flex w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700" type="button" data-modal-toggle="authentication-modal">
                                Registrar
                            </a> 
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}