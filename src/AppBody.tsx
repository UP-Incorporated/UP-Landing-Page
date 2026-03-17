import {Component} from "react";
import {CopyableText} from "./CopyableText.tsx";

export interface AppBodyProps {}

export class AppBody extends Component<AppBodyProps, {}> {
    render() {
        return (
            <>
                {/* Vertical Layering for Website */}
                <div className="flex flex-col items-center justify-between w-full px-4 select-none">
                    <h1 className="text-6xl font-bold text-white">
                        Welcome to UP!
                    </h1>
                    <h2 className="text-3xl text-white text-center">
                        Get Coding Services, now!
                    </h2>
                    <div className="mx-auto my-10 border-b border-b-gray-600 w-3/5" ></div>
                    <h3 className="text-4xl font-bold text-white mb-8">
                        Contact us using Email!
                    </h3>
                    <h4 className="text-2xl font-bold text-white">
                        At
                    </h4>
                    <CopyableText title="up-coding@proton.me" className="text-3xl text-white"/>
                </div>
            </>
        );
    }
}