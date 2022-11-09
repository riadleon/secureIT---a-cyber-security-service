import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-SecureIT`;
    }, [title])
}
export default useTitle;