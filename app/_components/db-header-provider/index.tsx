'use client';

interface Props {
    header?: string;
    submit?: any;
    children: React.ReactNode;
    only_header?: boolean;
    only_cta_btns?: boolean;
}

export default function DdHeaderProvider({ children, only_header, only_cta_btns, header = '', submit = '' }: Props) {
    return (
        <>
            <div>
                {/* navbar content */}
                <div className="text-white h-36 justify-between flex items-center md:mx-auto md:w-[83%]">
                    {only_cta_btns ? null : (
                        <div className="text-3xl font-mono font-bold">{header}</div>
                    )}

                    {/* Desktop Menu */}
                    <div className="md:flex items-center space-x-20">
                        <div className="relative group">
                            <button className="hidden hover:text-gray-300">Add Listings</button>
                        </div>

                        {/* Avatar */}
                        <div className="flex items-center">
                            <img
                                src="av2.jpg"
                                alt="Avatar"
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
                {/* end of navbar content  */}
                {/* body Content */}
                <div className="bg-white w-full md:w-[83%] flex-col flex md:mx-auto">{children}</div>
            </div>

            {/* dashboard body buttons it should be a function when passing props  */}
            {only_header ? null : (
                <div className="my-10 flex items-center md:mx-auto md:w-[83%]">{submit}
                    <button className=" text-white w-40 bg-black px-4 py-2 rounded-md mr-16">Save</button>
                    <button className=" text-red-500 ">Cancel</button>
                </div>
            )}

        </>
    )
}