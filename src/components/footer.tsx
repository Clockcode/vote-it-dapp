import { Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 py-12 md:h-32 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        {/* <Link
                            href="https://chadash.me"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Built by{" Cagdas Muldur"}
                        </Link> */}
                        . The source code is available on{" "}
                        {/* <Link
                            href="https://github.com/clockcode/vote_it_dapp"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </Link> */}
                        .
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/yourusername/your-repo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
