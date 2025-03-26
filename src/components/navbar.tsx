import { ConnectButton, lightTheme } from "thirdweb/react";
import { client } from "@/app/client";
import { baseSepolia } from "thirdweb/chains";
import { createWallet, inAppWallet } from "thirdweb/wallets";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { CreateMarketButton } from "./ui/createMarketButton";

export function Navbar() {
    const wallets = [
        inAppWallet(),
        createWallet("io.metamask"),
        createWallet("com.coinbase.wallet"),
        createWallet("me.rainbow"),
    ];

    // const account = useActiveAccount();
    // const [isClaimLoading, setIsClaimLoading] = useState(false);
    // const { toast } = useToast();
    // const handleClaimTokens = async () => {
    //     setIsClaimLoading(true);
    //     try {
    //         const resp = await fetch("/api/claimToken", {
    //             method: "POST",
    //             body: JSON.stringify({ address: account?.address }),
    //         });

    //         if (!resp.ok) {
    //             throw new Error('Failed to claim tokens');
    //         }

    //         toast({
    //             title: "Tokens Claimed!",
    //             description: "Your tokens have been successfully claimed.",
    //             duration: 5000,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         toast({
    //             title: "Claim Failed",
    //             description: "There was an error claiming your tokens. Please try again.",
    //             variant: "destructive",
    //         });
    //     } finally {
    //         setIsClaimLoading(false);
    //     }
    // };

    return (
        <div className="flex justify-between items-center mb-6 p-4 bg-gray-100 border-b border-gray-200">
            <div className="flex flex-row items-center cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out hover:filter hover:brightness-110">
                <Image src="/vote-it-logo.svg" alt="logo" width={180} height={180} />
            </div>
            <div className="items-center flex gap-2">
                {/* {account && (
                    <Button
                        onClick={handleClaimTokens}
                        disabled={isClaimLoading}
                        variant="outline"
                    >
                        {isClaimLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Claiming...
                            </>
                        ) : (
                            'Claim Tokens'
                        )}
                    </Button>
                )} */}
                <CreateMarketButton />
                <ConnectButton
                    client={client}
                    theme={lightTheme()}
                    chain={baseSepolia}
                    connectButton={{
                        style: {
                            fontSize: '0.75rem !important',
                            height: '2.5rem !important',
                        },
                        label: 'Sign In',
                    }}
                    detailsButton={{
                        displayBalanceToken: {
                            [baseSepolia.id]: process.env.NEXT_PUBLIC_TOKEN_CUSTOM_ADDRESS || ""
                        }
                    }}
                    wallets={wallets}
                    // accountAbstraction={{
                    //     chain: baseSepolia,
                    //     sponsorGas: true,
                    // }}
                />
            </div>
        </div>
    );
}
