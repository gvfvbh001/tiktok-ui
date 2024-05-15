import Sidebar from "./Sidebar";
import Header from "~/components/Layout/components/Header";
import classNames from "classnames/bind";
import defaultLayout from "./DefaultLayout.module.scss"
const cx = classNames.bind(defaultLayout);

function DefaultLayout ({children}) {
    return (
        <div className={cx("wrapper")}>
            <Header/>
            <div className={cx("container")}>
                <Sidebar/>
                <div className={cx("content")}>
                    <div className={cx("inner")}>
                        <div className= {cx("boxItem")}>
                             {children} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;