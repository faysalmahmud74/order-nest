import Module from "../custom-components/module-card";
import Layout from "../layout";
import { FaCartShopping } from "react-icons/fa6";

export default function OrderNav() {
    const modules = [
        {
            icon: < FaCartShopping size={40} color="#0d9488" />,
            name: "New Order",
            description: "Manage Order",
            path: '/order/new'
        },
        {
            icon: null,
            name: "View Order",
            description: "View Orders",
            path: '/order/list'
        },
    ]
    return (
        <Layout>
            <div className="grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 px-4 gap-4">
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