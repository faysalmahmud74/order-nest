
import Module from "../custom-components/module-card";
import Layout from "../layout";
import { LuSettings2 } from "react-icons/lu";

export default function SettingsNav() {

    const modules = [
        {
            icon: <LuSettings2 size={40} color="#0d9488" />,
            name: "Site Settings",
            description: "Manage site settings",
            path: '/settings/site'
        },
    ]
    return (
        <Layout>
            <div className="grid grid-cols-4 px-4 gap-4">
                {modules?.map((a) => (
                    < Module
                        icon={a?.icon}
                        title={a?.name}
                        description={a?.description}
                        path={a?.path}
                    />
                ))}
            </div>
        </Layout>
    )
}