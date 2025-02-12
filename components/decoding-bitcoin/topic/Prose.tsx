import clsx from "clsx"

export function Prose<T extends React.ElementType = "div">({
    as,
    className,
    ...props
}: React.ComponentPropsWithoutRef<T> & {
    as?: T
}) {
    let Component = as ?? "div"

    return (
        <Component
            className={clsx(
                className,
                "prose mx-auto dark:prose-invert text-lg",
                // Apply max-width-3xl to all direct children
                "[&>*]:max-w-3xl [&>*]:mx-auto",
                // Override for full-width components
                "[&>.full-width]:max-w-5xl [&>.full-width]:w-full",
                // links
                "dark:prose-a:text-orange-500",
                // link underline
                "prose-a:no-underline prose-a:text-black dark:prose-a:text-white prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.orange.500))] dark:hover:prose-a:[--tw-prose-underline-size:3px]",
                // inline code (not inside pre)
                "prose-code:break-words prose-code:rounded-md prose-code:border prose-code:border-gray-200 prose-code:bg-[#f7f6f3] prose-code:px-1.5 prose-code:py-0.5 prose-code:before:content-[''] prose-code:after:content-['']",
                "dark:prose-code:border-[#3a3a3b] dark:prose-code:bg-[#252526] dark:prose-code:brightness-125",
                // code inside pre (remove background and border)
                "[&_pre_code]:!bg-transparent [&_pre_code]:!border-0",
                // Specific styles for code inside li
                // unordered list
                "prose-ul:pl-0",
                "[&_ul]:list-none",
                "[&_ul>li]:relative [&_ul>li]:pl-8",
                "[&_ul>li]:before:content-['→'] [&_ul>li]:before:absolute [&_ul>li]:before:left-2 [&_ul>li]:before:top-1/2 [&_ul>li]:before:transform [&_ul>li]:before:-translate-y-1/2 [&_ul>li]:before:text-orange-500 [&_ul>li]:before:font-bold",
                // ordered list
                "[&_ol>li]:marker:text-orange-500",
                // Cancel custom list styling for elements with not-prose class
                "[&_.not-prose_ul]:list-disc [&_.not-prose_ul]:pl-5",
                "[&_.not-prose_ol]:list-decimal [&_.not-prose_ol]:pl-5",
                "[&_.not-prose_li]:pl-0 [&_.not-prose_li]:before:content-none",
                "[&_.not-prose_ol>li]:marker:text-current",
                // Unset color for specific elements
                "[&_thead_th]:text-current",
                "[&_code]:text-current",
                // Ensure headings and strong text use the current text color
                "[&_h1]:text-current [&_h2]:text-current [&_h3]:text-current [&_h4]:text-current",
                "[&_strong]:text-current",
                // Set background color for pre elements with different opacity for light and dark modes
                "[&_pre]:bg-[#1e1e1e]/85 dark:[&_pre]:bg-[#1e1e1e]/55",
                // Ensure text in pre elements is visible in both light and dark modes
                "[&_pre]:text-white dark:[&_pre]:text-gray-200"
            )}
            {...props}
        />
    )
}
