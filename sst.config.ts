import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";
export default {
    config(_input) {
        return {
            name: "ecosystemlandscape-website",
            region: "us-east-1",
        };
    },
    stacks(app) {
        app.stack(function Site({ stack }) {
            const site = new AstroSite(stack, "EcosystemLandscapeStaticSite", {
                customDomain: {
                    // domainAlias: process.env.CUSTOM_DOMAIN!.replace("www.", ""),
                    domainName: process.env.CUSTOM_DOMAIN!,
                },
                environment: {
                    IS_PUBLIC: "true",
                    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME!,
                    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!,
                    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET!,
                },
            });
            stack.addOutputs({
                url: site.url,
            });
        });
    },
} satisfies SSTConfig;
