

export type Profile ={
    name: string;
    imagem: string;
    github: string;
}

export const useProfile = () => {
    function fetchProfile(): Promise<Profile[]> {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                resolve([
                    {
                        name: "Leonardo Moreno",
                        imagem: "https://avatars.githubusercontent.com/u/201236015?v=4",
                        github: "https://github.com/pleomoreno"
                    },
                ]), 
            2000
            )
        })
    }
    return {
    fetchProfile
    }
}