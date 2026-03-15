import { Component } from "react";
import type { ReactNode } from "react";
interface AppBarProps {
    children: ReactNode;
}
export class AppBar extends Component<AppBarProps> {
    render() {
        return (
            <>
                <header className="bg-stone-800 border-b border-b-stone-600 h-16">
                    {this.props.children}
                </header>
            </>
        )
    }
}