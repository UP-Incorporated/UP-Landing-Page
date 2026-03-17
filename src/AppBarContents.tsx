import { Component } from "react";
import { RefreshButton } from "./RefreshButton.tsx";
import { AppBarMenu } from "./AppBarMenu.tsx";



export class AppBarContents extends Component<object> {
    render() {
        return (
            /* Main Container: Flex row that stretches across the top */
            <div className="flex flex-row items-center justify-between w-full h-16 px-4 ">
                <AppBarMenu />
                {/* Center Section: Branding */}
                <div className="flex flex-col flex-1">
                    <h1 className="text-2xl font-bold text-white text-center select-none">
                        UP Inc.
                    </h1>
                    <h2 className="text-xl text-white text-center select-none">Where Dreams come true</h2>
                </div>

                {/* Right Section: Actions */}
                <div className="flex-none">
                    <RefreshButton />
                </div>


            </div>
        );
    }
}
