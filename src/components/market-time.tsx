import { cn } from "@/lib/utils";

interface MarketTimeProps {
    endTime: bigint;
    className?: string;
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export function MarketTime({ endTime, className }: MarketTimeProps) {
    const isEnded = new Date(Number(endTime) * 1000) < new Date();

    const displayEndTime = () => {
        // Calculate remaining seconds by subtracting current time from end time
        const currentTimeSeconds = BigInt(Math.floor(Date.now() / 1000));

        const remainingSeconds = Number(endTime - currentTimeSeconds);

        const numdays = Math.floor(remainingSeconds / 86400);
        const numhours = Math.floor((remainingSeconds % 86400) / 3600);
        const numminutes = Math.floor((remainingSeconds % 3600) / 60);
        const numseconds = remainingSeconds % 60;

        // Build the string, including only non-zero values
        let result = "";
        switch (true) {
          case numdays > 0:
            result += "~" + numdays + (numdays === 1 ? " day " : " days ");
            break;
          case numhours > 0:
            result += "~" + numhours + (numhours === 1 ? " hr " : " hrs ");
            break;
          case numminutes > 0:
            result += "~" + numminutes + (numminutes === 1 ? " min " : " mins ");
            break;
          case numseconds > 0:
            result += "~" + numseconds + (numseconds === 1 ? " sec" : " secs");
            break;
        }

        return result.trim();
      }

    return (
        <div
            className={cn(
                "mb-2 w-fit px-2 py-1 rounded border text-xs",
                isEnded
                    ? "bg-red-200 border-red-300 text-red-800"
                    : "border-gray-300 text-gray-800",
                className
            )}
        >
            {isEnded ? "Ended" : "Ends: "}{displayEndTime()}
        </div>
    );
}
