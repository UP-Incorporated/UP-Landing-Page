import { Component } from "react";
import type { ReactNode } from "react";
interface AppBarProps {
    children: ReactNode;
}
export class AppBar extends Component<AppBarProps> {
    render() {
        return (
            <>
                <header className="bg-stone-800 border-b border-b-stone-600 h-16 sticky top-0 z-50">
                    {this.props.children}
                </header>
            </>
        )
    }
}