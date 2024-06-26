import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";

export default function App() {
    return (
        <Router
            root={props => (
                <div class="flex flex-row">
                    <Nav />
                    <Suspense>{props.children}</Suspense>
                </div>
            )}
        >
            <FileRoutes />
        </Router>
    );
}
