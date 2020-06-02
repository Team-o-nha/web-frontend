// libs import
import { useContext } from "react";
import LocaleContext from "@/contexts/LocaleContext";

// ご参考に：https://qiita.com/Tokky0425/items/70746f57f4affba0660c
// Why export connt (not export default)?
// Cuz this is the only way to test useContext
// Which requires a custom hook to wrapper over useContext
export const useLocaleContext = () => useContext(LocaleContext);
