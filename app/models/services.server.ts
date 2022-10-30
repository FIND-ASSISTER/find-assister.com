import { supabase } from "~/supabase.server"
import { Service } from "~/types/service";

export async function getServices(search: string | null): Promise<Array<Service>> {
    const { data: services, error } = await supabase
        .from('services')
        .select('*')
        .ilike('name', `%${search ?? ''}%`);

    return services ?? [];
}