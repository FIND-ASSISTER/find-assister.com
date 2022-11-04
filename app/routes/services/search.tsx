import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData, useLocation } from '@remix-run/react';
import { getServices } from '~/models/services.server';
import { Service as ServiceType } from '~/types/service';
import Service from '../../components/service';

type LoaderData = {
  services: Array<ServiceType>;
};

export const loader: LoaderFunction = async ({
    request,
}) => {
    const url = new URL(request.url);
    const term = url.searchParams.get("term");

    return json<LoaderData>({
        services: await getServices(term),
    });
}

export default function Index() {
  const { services } = useLoaderData() as LoaderData;
  console.log(services.length);
  
  const search = useLocation().search;
  const term = new URLSearchParams(search).get('term');
  return (
    <main className='m-5 w-full'>
      <form method='get' action='/services/search' className='my-5 w-100'>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Procurar</label>
          <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" defaultValue={term ?? ''} name='term' className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Procurar serviços..." />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Procurar
              </button>
          </div>
      </form>

      <div className='grid grid-rows-3 grid-flow-col gap-4'>
        {
          services.length > 0
          ? services.map((service: ServiceType) => <Service service={service} />)
          : <a>Nenhum serviço encontrado!</a>
        }
      </div>
    </main>
  );
}
