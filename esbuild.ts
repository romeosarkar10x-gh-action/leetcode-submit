import esbuild from "esbuild";

esbuild.build({
    entryPoints: ["src/index.ts"],
    outdir: ".",
    bundle: true,
    platform: "node",
});
