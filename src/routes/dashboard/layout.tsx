import { Session } from "@auth/core/types";
import { Slot, component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/header";

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
            <Header />
            <Slot />
        </>
    );
});
