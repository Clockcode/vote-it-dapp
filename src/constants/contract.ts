import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

export const contractAddress = "0xFe1e06DA96A0078a06B5fe3D54c86345A9e50898";
export const tokenAddress = "0xb414fb4d6E60c8DD0A6432AE64795e21558c3569";

export const contract = getContract({
    client: client,
    chain: baseSepolia,
    address: contractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: baseSepolia,
    address: tokenAddress
});