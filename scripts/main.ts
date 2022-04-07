importScar("cardinal.scar")
importScar("ScarUtil.scar")

const g = globalThis as any
Core_RegisterModule("Mod")

g.Mod_OnInit = () => {
    print("Hello world")
}
