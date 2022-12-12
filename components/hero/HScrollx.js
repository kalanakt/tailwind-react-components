import Link from "next/link"
import IconNext from "public/icons/hero/IconNext"
import IconReact from "public/icons/hero/IconReact"
import IconSanity from "public/icons/hero/IconSanity"
import IconTailwind from "public/icons/hero/IconTailwind"
import IconVercel from "public/icons/hero/IconVercel"

export default function HScrollx() {
	return (
		<div className=" m-auto p-auto">
            <div
                className="flex overflow-x-scroll pt-4 pb-10 hide-scroll-bar "
            >
                <div
                className="flex flex-nowrap justify-center items-center p-3"
                >
                <div className="inline-block px-3">
                    <div
                    className="w-fit h-fit px-6 py-2 max-w-xs overflow-hidden rounded-lg"
                    >
                        <IconReact />
                    </div>
                </div>
                <div className="inline-block px-3">
                    <div
                    className="w-fit h-fit px-6 py-2 max-w-xs overflow-hidden rounded-lg"
                    >
                        <IconNext />
                    </div>
                </div>
                <div className="inline-block px-3">
                    <div
                    className="w-fit h-fit px-6 py-4 max-w-xs overflow-hidden rounded-lg"
                    >
                        <IconSanity />
                    </div>
                </div>
                <div className="inline-block px-3">
                    <div
                    className="w-fit h-fit px-6 py-4 max-w-xs overflow-hidden rounded-lg"
                    >
                        <IconTailwind />
                    </div>
                </div>
                <div className="inline-block px-3">
                    <div
                    className="w-fit h-fit px-6 py-2 max-w-xs overflow-hidden rounded-lg"
                    >
                        <IconVercel />
                    </div>
                </div>
                <div className="inline-block px-3">
                    <div
                    className="w-fit h-fit px-6 py-2 max-w-xs overflow-hidden rounded-lg"
                    >
                        <IconReact />
                    </div>
                </div>
                <div className="inline-block px-3">
                    <div
                    className="w-fit h-fit px-6 py-2 max-w-xs overflow-hidden rounded-lg"
                    >
                        <IconNext />
                    </div>
                </div>
                <div className="inline-block px-3">
                    <div
                    className="w-fit h-fit px-6 py-2 max-w-xs overflow-hidden rounded-lg"
                    >
                        <IconSanity />
                    </div>
                </div>
                </div>
            </div>
        </div>
	)
}
