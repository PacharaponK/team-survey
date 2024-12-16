import ax from "./ax"
import conf from "./main"

export const getCurrentUser = async () => {
    try {
        const user = await ax.get(conf.jwtUserEndpoint)
        return user.data
    } catch (error) {
        console.error(error);
    }
}

export const getAllCustomers = async () => {
    try {
        const customers = await ax.get("/customers/admin-access")
        return customers.data
    } catch (error) {
        console.error(error);
    }
}

export const getTeams = async () => {
    try {
        const teams = await ax.get("/teams");
        return teams.data
    } catch (error) {
        console.error(error);
        
    }
}

export const createTeam = async (data) => {
    try {
        const team = await ax.post("/teams", {
            ...data
        })
        return team.data
    } catch (error) {
        console.error(error);
    }
}

export const listTeam = async () => {
    try {
        const team = await ax.get("/teams/admin-access")
        return team.data
    } catch (error) {
        console.error(error);
    }
}