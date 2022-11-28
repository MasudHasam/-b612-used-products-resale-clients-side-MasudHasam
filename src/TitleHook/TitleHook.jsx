import { useEffect } from "react";

const TitleHooks = (title) => {
    useEffect(() => {
        document.title = `${title}-Give & Take;`;
    }, [title]);
};

export default TitleHooks;