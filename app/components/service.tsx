import { Service } from "~/types/service";

type ServiceProps = {
    service: Service,
}

export default function Service(props: ServiceProps) {
    return (
        <>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.service.name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {props.service.descricao}
                    </p>
                </a>
                <div className="mt-5 flex">
                    <button className="ml-auto inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Saber mais
                            <i className="ml-2 fa-solid fa-arrow-up-right-from-square"></i>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}