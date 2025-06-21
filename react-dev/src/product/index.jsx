import { MdAssignmentAdd, MdFormatListBulletedAdd } from "react-icons/md";
import Module from "../custom-components/module-card";
import Layout from "../layout";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { HiViewGridAdd } from "react-icons/hi";

export default function ProductNav() {
    const modules = [
        {
            icon: <MdAssignmentAdd size={40} color="#0d9488" />,
            name: "Add Product",
            description: "Add a new product",
            path: '/product/new'
        },
        {
            icon: <FaClipboardList size={40} color="#0d9488" />,
            name: "Product List",
            description: "View all products",
            path: '/product/list'
        },
        {
            icon: <MdFormatListBulletedAdd size={40} color="#0d9488" />,
            name: "Add Variantions",
            description: "Add product variations",
            path: '/product/variation/new'
        },
        {
            icon: <LuClipboardList size={40} color="#0d9488" />,
            name: "Variation List",
            description: "View product variations",
            path: '/product/variation'
        },
        {
            icon: <HiViewGridAdd size={40} color="#0d9488" />,
            name: "Add Category",
            description: "Add a new category",
            path: '/product/category/new'
        },
        {
            icon: <AiOutlineUnorderedList size={40} color="#0d9488" />,
            name: "Category List",
            description: "View all categories",
            path: '/product/category'
        }
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
