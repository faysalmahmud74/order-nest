import Module from "../custom-components/module-card";
import Layout from "../layout";
import { MdDeliveryDining } from "react-icons/md";

export default function DeliveryNav() {
    const modules = [
        {
            icon: <MdDeliveryDining size={40} color="#0d9488" />,
            name: "New Delivery",
            description: "Manage Delivery",
            path: '/dekivery/new'
        },
        {
            icon: null,
            name: "Delivery List",
            description: "View Delivery",
            path: '/delivery/list'
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