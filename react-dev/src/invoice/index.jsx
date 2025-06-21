import { FaClipboardList, FaFileInvoiceDollar } from "react-icons/fa";
import Card from "../custom-components/card";
import Module from "../custom-components/module-card";
import Layout from "../layout";
import { IoDocumentText } from "react-icons/io5";
import { MdAssignmentAdd } from "react-icons/md";

export default function InvoiceNav() {
    const modules = [
        {
            icon: <MdAssignmentAdd size={40} color="#0d9488" />,
            name: "Add Invoice",
            description: "Create a new invoice",
            path: '/invoice/new'
        },
        {
            icon: <FaClipboardList size={40} color="#0d9488" />,
            name: "Invoice List",
            description: "View all invoices",
            path: '/invoice/list'
        },
    ];
    return (
        <Layout>
            <div className="grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 px-4 gap-4">
                {modules?.map((a) => (
                    <Module
                        icon={a?.icon}
                        title={a?.name}
                        description={a?.description}
                        path={a?.path}
                    />
                ))}
            </div>
        </Layout>
    );
}
