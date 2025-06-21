import Card from "../custom-components/card";
import Module from "../custom-components/module-card";
import Layout from "../layout";
import { IoPeople } from "react-icons/io5";

export default function EmployeeNav() {

    const modules = [
        {
            icon: < IoPeople size={40} color="#0d9488" />,
            name: "Add Employee",
            description: "Manage Employee",
            path: '/employees/new'
        },
        {
            icon: null,
            name: "Employee List",
            description: "View Employee List",
            path: '/employees/list'
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