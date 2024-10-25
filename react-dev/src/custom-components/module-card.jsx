import { Link } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import Card from "./card";

export default function Module({ icon, title, description, path }) {
    return (
        <Link to={path} className="w-full">
            <Card className="w-full p-5 hover:shadow-xl hover:cursor-pointer rounded-lg border">
                <div className="flex gap-4 items-center">
                    <div>{icon || <AiFillAppstore size={40} color="#0d9488" />}</div>
                    <div className="text-gray-700">
                        <p className="font-semibold text-lg">{title}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </Card>
        </Link>
    );
}