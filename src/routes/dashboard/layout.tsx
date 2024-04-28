
import { Session } from "@auth/core/types";
import { Slot, component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import { SideBar } from "~/components/Sidebar";
import { css } from "~/styled-system/css";



export const onRequest: RequestHandler = (event) => {
    const session: Session | null = event.sharedMap.get("session");
    if (!session || new Date(session.expires) < new Date()) {
        throw event.redirect(302, `/?callbackUrl=${event.url.pathname}`);
    }
    if (session?.role !== "ADMIN") {
        throw event.redirect(302, `/?callbackUrl=${event.url.pathname}`);
    }
};

export default component$(() => {
    return (
        <>
            <section
                class={css({
                    display: "flex",
                    minHeight: "100vh",
                })}
            >
                <div class={css({
                    maxW: "250px",
                    w: "35%",
                    minHeight: "100vh",
                })}>
                    <SideBar />
                </div>
                <div class={css({
                    flex: 1,
                })}>
                    <Slot />
                </div>
            </section>
        </>
    );
});
