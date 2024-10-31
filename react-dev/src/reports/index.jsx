import Module from "../custom-components/module-card";
import Layout from "../layout";
import { MdDeliveryDining } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";

export default function ReportsNav() {
    const modules = [
        {
            icon: <BsCashCoin size={40} color="#0d9488" />,
            name: "Sales Report",
            description: "View Sales Report",
            path: '/report/sales'
        },
        {
            icon: <MdDeliveryDining size={40} color="#0d9488" />,
            name: "Delivery Report",
            description: "View Delivery Report",
            path: '/report/delivery'
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