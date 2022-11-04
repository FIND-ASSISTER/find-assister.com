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
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i className="fa-solid fa-hammer"></i>
                                <span className="ml-3">Serviços</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-2 mt-auto">
                        <li className='flex w-full'>
                            <a href='#' className="flex w-full items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="button" data-modal-toggle="authentication-modal">
                                <i className="fa-solid fa-right-to-bracket mr-4"></i>
                                Entrar
                            </a>

                            <div id="authentication-modal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
                                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                        <div className="py-6 px-6 lg:px-8">
                                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                                            <form className="space-y-6" action="#">
                                                <div>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                                </div>
                                                <div>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                                        </div>
                                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                                    </div>
                                                    <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                                </div>
                                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                                    Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}