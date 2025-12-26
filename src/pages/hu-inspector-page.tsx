import { Button } from "@/components/animate-ui/components/buttons/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { HUInspectorService } from "@/service/huInspector.service";
import { HUEXAMPLE } from "@/utils/hu";

export function HUInspectorPage() {

    const handleAnalyzeHU = async (huContent: string) => {
        try {
            const result = await HUInspectorService.analyzeHU(huContent);
            console.log("HU Analysis Result:", result);
        } catch (error) {
            console.error("Error analyzing HU:", error);
        }
    }

    return (
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Tabs defaultValue="account">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <Button onClick={() => handleAnalyzeHU(HUEXAMPLE)} variant={"accent"}>Analyze HU</Button>
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you&apos;re
                                done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="grid gap-3">
                                {/* <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" /> */}
                                <p>Your account settings can be configured in the main application.</p>
                            </div>
                            <div className="grid gap-3">
                                {/* <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" /> */}
                                <p>To change your username, please visit the main application settings.</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you&apos;ll be logged
                                out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="grid gap-3">
                                <p>example text</p>
                            </div>
                            <div className="grid gap-3">
                                <p>example text 2</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
