import { Button } from "./button"
import { prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { contract } from '@/constants/contract'
import { useState } from "react";
import { createPortal } from "react-dom";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Input } from "./input";
type CreateMarketProps = {
  question: string;
  optionA: string;
  optionB: string;
  duration: bigint;
}

export const CreateMarketButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { mutate: sendTransaction } = useSendTransaction();

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const values = Object.fromEntries(formData);

    const transaction = prepareContractCall({
      contract,
      method:
        "function createMarket(string _question, string _optionA, string _optionB, uint256 _duration) returns (uint256)",
      params: [values.question as string, values.optionA as string, values.optionB as string, BigInt(values.duration as string)],
    });
    sendTransaction(transaction);
    setModalOpen(false);
  };

  const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <Button variant="outline" className="flex items-center gap-2" onClick={handleClick}>
        Create Market
      </Button>
      {createPortal(
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Market</DialogTitle>
              <DialogDescription>
                Create a new market to start trading.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={handleSubmit}
              id="create-market-form"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Question</p>
                  <Input name="question" placeholder="What is the question?" type="text" required />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Option A</p>
                  <Input name="optionA" placeholder="First option" type="text" required />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Option B</p>
                  <Input name="optionB" placeholder="Second option" type="text" required />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Duration</p>
                  <Input name="duration" placeholder="Duration in seconds" type="number" required />
                </div>
              </div>
            </form>
            <DialogFooter className="justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" form="create-market-form">Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        , document.body)}
    </>
  )
}

export default CreateMarketButton;