(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/FadeIn.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FadeIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function FadeIn({ delay = 50, transitionDuration = 400, wrapperTag: WrapperTag = "div", childTag: ChildTag = "div", className, childClassName, visible = true, onComplete, children }) {
    _s();
    const [maxIsVisible, setMaxIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FadeIn.useEffect": ()=>{
            let count = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(children);
            if (!visible) {
                count = 0; // Animate all children out
            }
            if (count === maxIsVisible) {
                // We're done updating maxVisible, notify when animation is done
                const timeout = setTimeout({
                    "FadeIn.useEffect.timeout": ()=>{
                        if (onComplete) onComplete();
                    }
                }["FadeIn.useEffect.timeout"], transitionDuration);
                return ({
                    "FadeIn.useEffect": ()=>clearTimeout(timeout)
                })["FadeIn.useEffect"];
            }
            // Move maxIsVisible toward count
            const increment = count > maxIsVisible ? 1 : -1;
            const timeout = setTimeout({
                "FadeIn.useEffect.timeout": ()=>{
                    setMaxIsVisible(maxIsVisible + increment);
                }
            }["FadeIn.useEffect.timeout"], delay);
            return ({
                "FadeIn.useEffect": ()=>clearTimeout(timeout)
            })["FadeIn.useEffect"];
        }
    }["FadeIn.useEffect"], [
        children,
        delay,
        maxIsVisible,
        visible,
        transitionDuration,
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WrapperTag, {
        className: className,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChildTag, {
                className: childClassName,
                style: {
                    transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
                    transform: maxIsVisible > i ? "none" : "translateY(20px)",
                    opacity: maxIsVisible > i ? 1 : 0
                },
                children: child
            }, void 0, false, {
                fileName: "[project]/app/components/FadeIn.jsx",
                lineNumber: 41,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/FadeIn.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(FadeIn, "87IcIk5Fy8rz4DNQTfh2NRlu/wQ=");
_c = FadeIn;
var _c;
__turbopack_context__.k.register(_c, "FadeIn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Main.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Main
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$X$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/X.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LinkedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LinkedIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lottiefiles/dotlottie-react/dist/browser/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Main({ mode }) {
    _s();
    const [showText, setShowText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // ✅ Lottie refs & keys
    const lottieRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [lottieKey, setLottieKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Toggle text every 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Main.useEffect": ()=>{
            const interval = setInterval({
                "Main.useEffect.interval": ()=>{
                    setShowText({
                        "Main.useEffect.interval": (prev)=>!prev
                    }["Main.useEffect.interval"]);
                }
            }["Main.useEffect.interval"], 3000);
            return ({
                "Main.useEffect": ()=>clearInterval(interval)
            })["Main.useEffect"];
        }
    }["Main.useEffect"], []);
    // ✅ ResizeObserver for responsive Lottie
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Main.useEffect": ()=>{
            if (!lottieRef.current) return;
            const observer = new ResizeObserver({
                "Main.useEffect": ()=>{
                    setLottieKey({
                        "Main.useEffect": (prev)=>prev + 1
                    }["Main.useEffect"]);
                }
            }["Main.useEffect"]);
            observer.observe(lottieRef.current);
            return ({
                "Main.useEffect": ()=>observer.disconnect()
            })["Main.useEffect"];
        }
    }["Main.useEffect"], []);
    const lottieStyle = {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex flex-row justify-start items-center w-full px-[15%] min-h-[680px] bg-center bg-cover bg-fixed max-md:block max-md:px-0 max-md:pt-[160px]",
            style: {
                backgroundImage: "none"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: !showText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 1
                        },
                        className: "absolute inset-0 z-0",
                        ref: lottieRef,
                        children: [
                            mode === "light" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                                src: "/images/lightMode.lottie",
                                loop: true,
                                autoplay: true,
                                renderer: "canvas",
                                style: lottieStyle
                            }, `light-${lottieKey}`, false, {
                                fileName: "[project]/app/components/Main.jsx",
                                lineNumber: 63,
                                columnNumber: 17
                            }, this),
                            mode === "dark" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                                src: "/images/darkMode.lottie",
                                loop: true,
                                autoplay: true,
                                renderer: "canvas",
                                style: lottieStyle
                            }, `dark-${lottieKey}`, false, {
                                fileName: "[project]/app/components/Main.jsx",
                                lineNumber: 73,
                                columnNumber: 17
                            }, this)
                        ]
                    }, "lottie", true, {
                        fileName: "[project]/app/components/Main.jsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Main.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: showText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -30
                            },
                            transition: {
                                duration: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[clamp(2rem,6vw,4rem)] font-bold leading-tight mt-15",
                                    style: {
                                        color: "#F7931E"
                                    },
                                    children: "Welcome to OmniReach"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main.jsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-l",
                                    children: "At Omnireach Technology, we offer Contract, Full-Time and Part-Time services for a wide range of industries."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main.jsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 1
                                    },
                                    className: "mt-8 flex justify-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.linkedin.com/company/omrtech/",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "group flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-md hover:bg-[#0A66C2] transition duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LinkedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "!text-[#0A66C2] group-hover:!text-white !text-[30px]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Main.jsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Main.jsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://x.com/omnireachtech",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "group flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-md hover:bg-black transition duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$X$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "!text-black group-hover:!text-white !text-[28px]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Main.jsx",
                                                lineNumber: 129,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Main.jsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Main.jsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "text", true, {
                            fileName: "[project]/app/components/Main.jsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Main.jsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Main.jsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Main.jsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Main.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Main, "5P7VVR4iPAdpBIKBAcVPtCeZt2U=");
_c = Main;
var _c;
__turbopack_context__.k.register(_c, "Main");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Home.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/components/Home.jsx
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lottiefiles/dotlottie-react/dist/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const labels = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faClock"],
        title: "Deliver",
        description: "With a talent database of over 300,000 middle to C-level specialists, we are always at the top of our game. You can rest assured that no deadline or agreement will be broken."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faMicrochip"],
        title: "Tools and technologies",
        description: "Our technical team master a comprehensive set of tools and technologies during project development."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faHandsHelping"],
        title: "Care",
        description: "We see people not as a disposable resource but as the businesses’ primary asset and build human-to-human connections with clients, partners, talents, and employees."
    }
];
function Home() {
    _s();
    const lottieContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [lottieKey, setLottieKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // ✅ Universal resize handling (Windows / macOS / Linux / iOS / Android)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!lottieContainerRef.current) return;
            const observer = new ResizeObserver({
                "Home.useEffect": ()=>{
                    setLottieKey({
                        "Home.useEffect": (prev)=>prev + 1
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"]);
            observer.observe(lottieContainerRef.current);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col justify-center items-center mx-auto px-[8%] py-10 text-center",
        id: "home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold",
                        children: "What Makes Us Different"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Home.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10",
                        children: labels.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white text-[#272822] rounded-2xl p-6 shadow-md font-mono flex flex-col items-start gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: item.icon,
                                        size: "2x",
                                        className: "text-[#0d1116]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Home.jsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-left mt-2",
                                        style: {
                                            color: "#F7931E"
                                        },
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Home.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-m leading-relaxed text-left",
                                        style: {
                                            color: "#1D2452"
                                        },
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Home.jsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/components/Home.jsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Home.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Home.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: lottieContainerRef,
                className: "relative w-full max-w-5xl mx-auto h-[220px] sm:h-[300px] md:h-[380px] mt-12 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                    src: "/images/home.lottie",
                    loop: true,
                    autoplay: true,
                    renderer: "canvas",
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }, lottieKey, false, {
                    fileName: "[project]/app/components/Home.jsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Home.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-4",
                                style: {
                                    color: "#F7931E"
                                },
                                children: "Mission"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Home.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "leading-relaxed text-m",
                                style: {
                                    color: "#1D2452"
                                },
                                children: "Our mission is to transform recruitment into a faster, fairer, and more reliable process. We combine AI-powered tools with human expertise to connect businesses with the right talent quickly."
                            }, void 0, false, {
                                fileName: "[project]/app/components/Home.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Home.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-4",
                                style: {
                                    color: "#F7931E"
                                },
                                children: "Vision"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Home.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "leading-relaxed text-m",
                                style: {
                                    color: "#1D2452"
                                },
                                children: "Our vision is to harness the power of AI to make hiring faster, smarter, and more transparent."
                            }, void 0, false, {
                                fileName: "[project]/app/components/Home.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Home.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Home.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Home.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Home, "pKWKUBonI4RbHFjkfsCeoyk4Eos=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ImageSlider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lottiefiles/dotlottie-react/dist/browser/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const images = [
    "/images/about1.lottie",
    "/images/about2.lottie",
    "/images/about3.lottie"
];
const lottieStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
};
const ImageSlider = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-e08799a4c00c1786" + " " + "w-full max-w-lg mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...settings,
                children: images.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e08799a4c00c1786",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e08799a4c00c1786" + " " + "relative w-full h-72 sm:h-100 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                                src: src,
                                loop: true,
                                autoplay: true,
                                style: lottieStyle
                            }, void 0, false, {
                                fileName: "[project]/app/components/ImageSlider.jsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/ImageSlider.jsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, idx, false, {
                        fileName: "[project]/app/components/ImageSlider.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/ImageSlider.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e08799a4c00c1786",
                children: ".slick-dots li button:before{color:#f7931e;opacity:.4;margin-top:10px;font-size:10px}.slick-dots li.slick-active button:before{opacity:1;color:#f7931e}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ImageSlider.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ImageSlider;
const __TURBOPACK__default__export__ = ImageSlider;
var _c;
__turbopack_context__.k.register(_c, "ImageSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/About.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ImageSlider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ImageSlider.jsx [app-client] (ecmascript)");
"use client";
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "flex flex-col items-center px-6 sm:px-10 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl sm:text-4xl font-bold text-gray-800 mb-5 text-center",
                children: "About Us"
            }, void 0, false, {
                fileName: "[project]/app/components/About.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg sm:text-xl font-semibold mb-4",
                style: {
                    color: "#F7931E"
                },
                children: "We are OmniReach Technologies, and we are dedicated to offering reliable services."
            }, void 0, false, {
                fileName: "[project]/app/components/About.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-5xl w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-base sm:text-l leading-relaxed text-justify space-y-6 h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-10 text-sm sm:text-base",
                            children: "As the business world continues to grow and develop, new technologies are appearing to help keep up with demand. These technologies can change as rapidly as the rest of the business landscape, and it can sometimes feel hard to keep up with. Our IT services can help smooth the path between technology and business, helping to keep companies competitive without being forced to hire an expensive in-house team, or waste the valuable time of staff that are trained to do other things. We offer reliable solutions that are more than just a few techs on staff to help you get through software upgrades. We can help you increase efficiency, minimize costs, and add in new technologies without compromising on quality. Our expert knowledge can point you to a path that you may not otherwise have taken but will help reduce costs and increase efficiency. With today’s businesses already being stretched thin with the pressures to keep up with customers and other competing firms, it can be hard to think about other important things such as business security and streamlining currently."
                        }, void 0, false, {
                            fileName: "[project]/app/components/About.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/About.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ImageSlider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/About.jsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/About.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/About.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/About.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/About.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$X$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/X.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Phone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Email$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Email.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LinkedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LinkedIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocationOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LocationOn.js [app-client] (ecmascript)");
;
;
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row flex-wrap justify-between items-start max-w-[1100px] mx-auto px-5 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-[200px] text-center md:text-left mt-[-35px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/logo2.png",
                            alt: "MWBE Certification Logo",
                            className: "mx-auto md:mx-0 max-w-full h-[150px] object-contain !mr-60"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Footer.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-[200px] flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-relaxed",
                            children: "Omnireach is a trusted consulting partner, bridging top talent with leading organizations through innovative staffing solutions, industry expertise, and a commitment to lasting career success."
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Footer.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-[200px] text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold !mr-25",
                                style: {
                                    color: '#F7931E'
                                },
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "my-1 text-sm !mr-22",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "!mr-2 !text-[20px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    "01204332188"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "my-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Email$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "!mr-2 !text-[20px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:hr@omnireachtech.com",
                                        className: "text-blue-600 hover:underline",
                                        children: "hr@omnireachtech.com"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 mt-3 !mr-30 justify-center md:justify-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/company/omrtech/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "group flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-[#0A66C2] transition duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LinkedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "!text-[#0A66C2] group-hover:!text-white !text-[28px]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.jsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://x.com/omnireachtech",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "group flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-black transition duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$X$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "!text-black group-hover:!text-white !text-[26px]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.jsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-[200px] text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold !mr-63",
                                style: {
                                    color: '#F7931E'
                                },
                                children: "Address"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "my-1 text-sm !mr-35 whitespace-nowrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocationOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "!mr-1 !text-[20px] "
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    " Noida, Uttar Pradesh, IN"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "my-1 text-sm !mr-30 md:whitespace-nowrap whitespace-normal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocationOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "!mr-1 !text-[20px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    " 308 Flint Rd, Langhorne, PA 19047, US"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    title: "Diverse Lynx India Office Location",
                                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923289947!2d77.23701161849016!3d28.522404036068785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1757098468801!5m2!1sen!2sin",
                                    style: {
                                        border: 0
                                    },
                                    allowFullScreen: true,
                                    loading: "lazy",
                                    referrerPolicy: "no-referrer-when-downgrade",
                                    className: "w-full h-[100px]"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.jsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center mt-5 text-sm w-full",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: "Omnireach Technology"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 92,
                                columnNumber: 45
                            }, this),
                            ". All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Footer.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Contact.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "contact",
        className: "h-full flex flex-col justify-center items-center mx-auto px-[10%] py-6 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-6",
                children: "Request a call back"
            }, void 0, false, {
                fileName: "[project]/app/components/Contact.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6",
                style: {
                    color: "#F7931E"
                },
                children: "Send us an email and we’ll get in touch shortly, we would be delighted to speak."
            }, void 0, false, {
                fileName: "[project]/app/components/Contact.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=hr@omnireachtech.com&su=Recruitment%20Inquiry&body=Hello%20Omnireach%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you%20regarding%20recruitment%20opportunities%20and%20services.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20discuss.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-20 py-3 rounded-xl font-semibold shadow-lg transition hover:opacity-90",
                style: {
                    background: "linear-gradient(90deg, #F7931E, #1D2452)",
                    color: "#fff"
                },
                children: "Talk to a Recruitment Strategist"
            }, void 0, false, {
                fileName: "[project]/app/components/Contact.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Contact.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
} // ------------------------------------------Old Code Below------------------------------------------
 // "use client";
 // import Box from '@mui/material/Box';
 // import Alert from '@mui/material/Alert';
 // import Button from '@mui/material/Button';
 // import Snackbar from "@mui/material/Snackbar";
 // import SendIcon from '@mui/icons-material/Send';
 // import TextField from '@mui/material/TextField';
 // import CheckIcon from '@mui/icons-material/Check';
 // import ErrorIcon from '@mui/icons-material/Error';
 // import ClearIcon from "@mui/icons-material/Clear";
 // import IconButton from "@mui/material/IconButton";
 // import React, { useRef, useState, useEffect } from 'react';
 // import CircularProgress from "@mui/material/CircularProgress";
 // export default function Contact() {
 //   const [name, setName] = useState('');
 //   const [email, setEmail] = useState('');
 //   const [resume, setResume] = useState(null);
 //   const [message, setMessage] = useState('');
 //   const [feedback, setFeedback] = useState('');
 //   const [mounted, setMounted] = useState(false);
 //   const [loading, setLoading] = useState(false);
 //   const [nameError, setNameError] = useState(false);
 //   const [emailError, setEmailError] = useState(false);
 //   const [messageError, setMessageError] = useState(false);
 //   const [alertSeverity, setAlertSeverity] = useState('success');
 //   const form = useRef(null);
 //   const fileInputRef = useRef(null);
 //   // ✅ Email & Phone Validators
 //   const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
 //   const validatePhone = (value) => /^\+?[0-9]{7,15}$/.test(value);
 //   useEffect(() => {
 //     if (feedback) {
 //       const timer = setTimeout(() => {
 //         setFeedback('');
 //       }, 5000);
 //       return () => clearTimeout(timer);
 //     }
 //   }, [feedback]);
 //   useEffect(() => {
 //     setMounted(true);
 //   }, []);
 //   if (!mounted) return null;
 //   const sendEmail = async (e) => {
 //     e.preventDefault();
 //     setLoading(true);
 //     // validate required fields
 //     setNameError(name === '' ? "Please enter your name" : false);
 //     setMessageError(message === '' ? "Please enter the message" : false);
 //     if (email === '') {
 //       setEmailError("Please enter your email or phone number");
 //     } else if (!validateEmail(email) && !validatePhone(email)) {
 //       setEmailError("Enter a valid email or phone number");
 //     } else {
 //       setEmailError(false);
 //     }
 //     if (name && message && email && !emailError) {
 //       try {
 //         // helper function: convert file to base64
 //         const toBase64 = (file) =>
 //           new Promise((resolve, reject) => {
 //             const reader = new FileReader();
 //             reader.readAsDataURL(file);
 //             reader.onload = () => resolve(reader.result);
 //             reader.onerror = (error) => reject(error);
 //           });
 //         let resumeData = null;
 //         if (resume) {
 //           resumeData = {
 //             name: resume.name,
 //             type: resume.type,
 //             data: await toBase64(resume),
 //           };
 //         }
 //         const res = await fetch("/api/send-email", {
 //           method: "POST",
 //           headers: { "Content-Type": "application/json" },
 //           body: JSON.stringify({
 //             name,
 //             email,
 //             message,
 //             resume: resumeData,
 //           }),
 //         });
 //         const data = await res.json();
 //         if (data.success) {
 //           setFeedback("Mail has been sent successfully!");
 //           setAlertSeverity("success");
 //           setName("");
 //           setEmail("");
 //           setMessage("");
 //           setResume(null);
 //           if (fileInputRef.current) fileInputRef.current.value = "";
 //         } else {
 //           setFeedback(data.message || "Failed to send mail.");
 //           setAlertSeverity("error");
 //         }
 //       } catch (error) {
 //         setFeedback("Error sending mail.");
 //         setAlertSeverity("error");
 //       } finally {
 //         setLoading(false);
 //       }
 //     } else {
 //       setLoading(false);
 //     }
 //   };
 //   return (
 //     <div id="contact" className="h-full flex flex-col justify-center items-center mx-auto px-[10%] py-6 text-center">
 //       <h2 className="text-3xl font-bold mb-6">Request a call back</h2>
 //       <p className="text-gray-200" style={{ color: '#F7931E' }}>
 //         Send us an email and we’ll get in touch shortly, we would be delighted to speak. 😊
 //       </p>
 //       <Box
 //         ref={form}
 //         component="form"
 //         noValidate
 //         autoComplete="off"
 //         className="pt-5 w-full"
 //         onSubmit={sendEmail}
 //         onKeyDown={(e) => {
 //           if (e.key === "Enter" && e.target.name !== "message") {
 //             e.preventDefault();
 //           }
 //         }}
 //       >
 //         {/* Name & Email/Phone Fields */}
 //         <div className="flex gap-[15px] pb-[15px]">
 //           <TextField
 //             required
 //             name="name"
 //             label="Your Name"
 //             placeholder="What's your name?"
 //             value={name}
 //             onChange={(e) => {
 //               setName(e.target.value);
 //               if (e.target.value.trim() !== "") setNameError(false);
 //             }}
 //             error={Boolean(nameError)}
 //             helperText={nameError || ""}
 //             InputProps={{ className: "bg-white text-black font-mono" }}
 //             InputLabelProps={{ className: "text-[1.2rem] font-sans" }}
 //             sx={{
 //               "& input::placeholder": {
 //                 fontFamily: "monospace",
 //                 fontSize: "1rem",
 //                 color: "rgba(0,0,0,1)",
 //               },
 //             }}
 //             className="w-full"
 //             disabled={loading}
 //           />
 //           <TextField
 //             required
 //             name="email"
 //             label="Your Email or Phone"
 //             placeholder="What's your email or phone?"
 //             value={email}
 //             onChange={(e) => {
 //               const value = e.target.value.trim();
 //               setEmail(value);
 //               if (value === "") {
 //                 setEmailError("Please enter your email or phone number");
 //               } else if (!validateEmail(value) && !validatePhone(value)) {
 //                 setEmailError("Enter a valid email or phone number");
 //               } else {
 //                 setEmailError(false);
 //               }
 //             }}
 //             error={Boolean(emailError)}
 //             helperText={emailError || ""}
 //             InputProps={{ className: "bg-white text-black font-mono" }}
 //             InputLabelProps={{ className: "text-[1.2rem] font-sans" }}
 //             sx={{
 //               "& input::placeholder": {
 //                 fontFamily: "monospace",
 //                 fontSize: "1rem",
 //                 color: "rgba(0,0,0,1)",
 //               },
 //             }}
 //             className="w-full"
 //             disabled={loading}
 //           />
 //         </div>
 //         <TextField
 //           required
 //           name="message"
 //           label="Message"
 //           placeholder="Feel free to send me any inquiries or questions."
 //           multiline
 //           rows={10}
 //           value={message}
 //           onChange={(e) => {
 //             setMessage(e.target.value);
 //             if (e.target.value.trim() !== "") setMessageError(false);
 //           }}
 //           error={Boolean(messageError)}
 //           helperText={messageError || ""}
 //           InputProps={{ className: "bg-white text-black font-mono" }}
 //           InputLabelProps={{ className: "text-[1.2rem] font-sans" }}
 //           sx={{
 //             "& textarea::placeholder": {
 //               fontFamily: "monospace",
 //               fontSize: "1rem",
 //               color: "rgba(0,0,0,1)",
 //             },
 //           }}
 //           className="w-full mb-[5px]"
 //           disabled={loading}
 //         />
 //         <TextField
 //           type="file"
 //           name="resume"
 //           label="Upload Resume (PDF, DOC, DOCX)"
 //           inputRef={fileInputRef}
 //           InputLabelProps={{
 //             shrink: true,
 //             className: "text-[1.2rem] font-sans"
 //           }}
 //           inputProps={{
 //             accept: ".pdf,.doc,.docx",
 //           }}
 //           sx={{
 //             mt: 2,
 //             '& .MuiOutlinedInput-root': {
 //               height: '40px',
 //               backgroundColor: 'white',
 //               color: 'black',
 //               fontFamily: 'monospace',
 //               fontSize: '1rem',
 //             },
 //             '& input[type="file"]': {
 //               height: '40px',
 //               cursor: 'pointer',
 //               color: 'rgba(0,0,0,0.6)',
 //               fontFamily: 'monospace',
 //               fontSize: '1rem',
 //             },
 //             '& input[type="file"]::file-selector-button': {
 //               fontFamily: 'monospace',
 //               fontSize: '0.9rem',
 //               border: 'none',
 //               padding: '8px 12px',
 //               marginRight: '12px',
 //               borderRadius: '4px',
 //               cursor: 'pointer',
 //               color: '#333',
 //             },
 //           }}
 //           className="w-[50%] float-left"
 //           onChange={(e) => setResume(e.target.files[0])}
 //           disabled={loading}
 //           InputProps={{
 //             endAdornment: resume ? (
 //               <IconButton
 //                 onClick={() => {
 //                   setResume(null);
 //                   if (fileInputRef.current) {
 //                     fileInputRef.current.value = "";
 //                   }
 //                 }}
 //                 size="small"
 //                 sx={{ ml: 1 }}
 //                 disabled={loading}
 //               >
 //                 <ClearIcon fontSize="small" sx={{ color: "red" }} />
 //               </IconButton>
 //             ) : null,
 //           }}
 //         />
 //         {/* ✅ Spinner inside Button */}
 //         <Button
 //           type="submit"
 //           variant="contained"
 //           className="float-right"
 //           disabled={loading}
 //           sx={{
 //             marginTop: '15px',
 //             backgroundColor: 'white',
 //             color: '#050f0b',
 //             display: "flex",
 //             alignItems: "center",
 //             justifyContent: "center",
 //             gap: "8px",
 //             '&:hover': {
 //               backgroundColor: '#F7931E',
 //               color: 'white',
 //             },
 //           }}
 //         >
 //           {loading ? (
 //             <>
 //               <CircularProgress size={20} color="inherit" /> Sending...
 //             </>
 //           ) : (
 //             <>
 //               Send <SendIcon className="text-base align-middle mr-1.5" />
 //             </>
 //           )}
 //         </Button>
 //         {feedback && (
 //           <Snackbar
 //             open={Boolean(feedback)}
 //             anchorOrigin={{ vertical: "top", horizontal: "center" }}
 //             autoHideDuration={10000}
 //             onClose={() => setFeedback("")}
 //           >
 //             <Alert
 //               icon={
 //                 alertSeverity === "success"
 //                   ? <CheckIcon fontSize="inherit" />
 //                   : <ErrorIcon fontSize="inherit" />
 //               }
 //               severity={alertSeverity}
 //               variant="filled"
 //             >
 //               {feedback}
 //             </Alert>
 //           </Snackbar>
 //         )}
 //       </Box>
 //     </div>
 //   );
 // }
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Career.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Career
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
// Core MUI icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VerifiedUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/VerifiedUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BusinessCenter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/BusinessCenter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AssignmentTurnedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AssignmentTurnedIn.js [app-client] (ecmascript)");
// Industry Icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Computer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Computer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Campaign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Campaign.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Engineering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Engineering.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocalHospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LocalHospital.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AccountBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AdminPanelSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AdminPanelSettings.js [app-client] (ecmascript)");
// Role Icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Code.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Science$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Science.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Security$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Security.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Calculate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Calculate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BugReport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/BugReport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PeopleAlt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PeopleAlt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudQueue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CloudQueue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Assessment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Assessment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ExpandMore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PhoneInTalk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PhoneInTalk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PrecisionManufacturing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PrecisionManufacturing.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Industries Data with roles + icons
const industries = [
    {
        title: "Information Technology (IT & Tech)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Computer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        roles: [
            {
                name: "Software Engineers & Developers",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Quality Assurance (QA) Specialists",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BugReport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Cloud & DevOps Professionals",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudQueue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Cybersecurity Experts",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Security$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Data Engineers",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }
        ]
    },
    {
        title: "Healthcare & Life Sciences",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocalHospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        roles: [
            {
                name: "Nurses & Physicians",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocalHospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Therapists",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PeopleAlt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Laboratory Technicians",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Science$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Healthcare IT Specialists",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Computer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Pharmaceutical R&D Professionals",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Science$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }
        ]
    },
    {
        title: "Finance & Accounting",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        roles: [
            {
                name: "Accountants",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Calculate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Auditors",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Assessment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Financial Analysts",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Assessment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Tax Specialists",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Calculate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Controllers",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }
        ]
    },
    {
        title: "Engineering",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Engineering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        roles: [
            {
                name: "Civil Engineers",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Engineering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Mechanical Engineers",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PrecisionManufacturing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Electrical Engineers",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Engineering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Manufacturing Engineers",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PrecisionManufacturing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Industrial Engineers",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Engineering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }
        ]
    },
    {
        title: "Administrative & Office Support",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AdminPanelSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        roles: [
            {
                name: "Executive Assistants",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PeopleAlt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Data Entry Specialists",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Clerks",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AdminPanelSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Receptionists",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PhoneInTalk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Office Managers",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }
        ]
    },
    {
        title: "Sales & Marketing",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Campaign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        roles: [
            {
                name: "Sales Representatives",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PhoneInTalk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                name: "Marketing Specialists",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Campaign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }
        ]
    }
];
function Career() {
    _s();
    const [openIndex, setOpenIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "career",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "text-center py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "text-3xl font-bold mb-4",
                        children: "Build Your Future with us 🚀"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Career.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-l max-w-2xl mx-auto",
                        children: [
                            "At ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: "Omnireach Technology"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Career.jsx",
                                lineNumber: 117,
                                columnNumber: 14
                            }, this),
                            ", we connect talented professionals with leading organizations across industries. Whether you’re looking for your first job or your next big move, we’re here to help you succeed."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Career.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Career.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-center mb-8",
                        style: {
                            color: "#F7931E"
                        },
                        children: "Why Choose Us?"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Career.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: [
                            "Access to exclusive job opportunities",
                            "Personalized career guidance & resume support",
                            "Opportunities across multiple industries & skill sets",
                            "A dedicated team that supports you every step of the way"
                        ].map((point, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.05
                                },
                                className: "bg-white rounded-2xl shadow p-6 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium",
                                    style: {
                                        color: "#1D2452"
                                    },
                                    children: [
                                        "✅ ",
                                        point
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Career.jsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/app/components/Career.jsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Career.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Career.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-8 mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-center mb-8",
                            style: {
                                color: "#F7931E"
                            },
                            children: "Our Hiring Process"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Career.jsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-4 gap-6",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                    text: "We Understand Your Skills & Goals"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BusinessCenter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                    text: "Match You With Client Needs"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AssignmentTurnedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                    text: "Guide You Through Interviews"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VerifiedUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                    text: "Ensure The Right Fit For Success"
                                }
                            ].map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    className: "bg-white rounded-2xl shadow p-6 flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(step.icon, {
                                            className: "mb-4",
                                            style: {
                                                fontSize: 32
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Career.jsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center font-medium",
                                            style: {
                                                color: "#1D2452"
                                            },
                                            children: step.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Career.jsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/components/Career.jsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Career.jsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Career.jsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Career.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-5",
                id: "industries",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-center mb-10",
                            style: {
                                color: "#F7931E"
                            },
                            children: "Industries & Domains We Cover"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Career.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: industries.map((industry, idx)=>{
                                const isOpen = openIndex === idx;
                                const IndustryIcon = industry.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl shadow-md overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setOpenIndex(isOpen ? null : idx),
                                            className: "w-full flex cursor-pointer justify-between items-center p-5 text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndustryIcon, {
                                                            className: "text-[#1D2452]",
                                                            style: {
                                                                fontSize: 28
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Career.jsx",
                                                            lineNumber: 187,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-l font-semibold text-[#1D2452]",
                                                            style: {
                                                                color: "#1D2452"
                                                            },
                                                            children: industry.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Career.jsx",
                                                            lineNumber: 188,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Career.jsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        rotate: isOpen ? 180 : 0
                                                    },
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Career.jsx",
                                                        lineNumber: 196,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Career.jsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Career.jsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this),
                                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                height: 0
                                            },
                                            animate: {
                                                opacity: 1,
                                                height: "auto"
                                            },
                                            exit: {
                                                opacity: 0,
                                                height: 0
                                            },
                                            transition: {
                                                duration: 0.2
                                            },
                                            className: "px-6 pb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4",
                                                children: industry.roles.map((role, i)=>{
                                                    const RoleIcon = role.icon;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            scale: 1.05
                                                        },
                                                        className: "bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleIcon, {
                                                                className: "text-[#1D2452]",
                                                                style: {
                                                                    fontSize: 22
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Career.jsx",
                                                                lineNumber: 218,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-m",
                                                                style: {
                                                                    color: "#1D2452"
                                                                },
                                                                children: role.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Career.jsx",
                                                                lineNumber: 219,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/components/Career.jsx",
                                                        lineNumber: 213,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Career.jsx",
                                                lineNumber: 209,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Career.jsx",
                                            lineNumber: 202,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/components/Career.jsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/components/Career.jsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Career.jsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Career.jsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "text-center py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-6",
                        children: "Join Our Talent Network"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Career.jsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-3xl mx-auto mb-6",
                        children: [
                            "Not seeing the right opportunity right now? Send us your resume anyway at ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-[#F7931E]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EMAIL
                            }, void 0, false, {
                                fileName: "[project]/app/components/Career.jsx",
                                lineNumber: 237,
                                columnNumber: 85
                            }, this),
                            ", We’ll keep you in mind for future roles that match your skills."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Career.jsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Career.jsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Career.jsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(Career, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = Career;
var _c;
__turbopack_context__.k.register(_c, "Career");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Testimonial.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
const testimonials = [
    {
        text: "I had been sending out applications for months with no response. Within a week of connecting with OmniReach Technology, I had three interviews lined up. They didn’t just find me a job — they found me the right fit.",
        author: "Business Analyst",
        location: "Virginia"
    },
    {
        text: "What I appreciated most was how OmniReach Technology treated me like a person, not a resume. My recruiter checked in before and after every interview, made sure I was prepared, and celebrated with me when I got the offer.",
        author: "Scrum Master",
        location: "Texas"
    },
    {
        text: "I wasn’t sure if my skills were relevant after being out of work for a while. OmniReach Technology helped me reframe my resume and got me into a contract role that gave me the confidence to keep growing.",
        author: "QA Tester",
        location: "Remote"
    },
    {
        text: "Most recruiters ghost you. OmniReach Technology didn’t. Even when the first client passed, they kept me updated and quickly found me another opportunity. That honesty meant a lot.",
        author: "Java Developer",
        location: "Chicago"
    },
    {
        text: "I was nervous about switching from a government project to the private sector. My recruiter at OmniReach Technology explained everything clearly, helped with the transition, and I landed a role with better pay and flexibility.",
        author: "Project Manager",
        location: "Washington DC"
    },
    {
        text: "OmniReach Technology wasn’t pushy. They actually asked me what I wanted in my next role — location, salary, flexibility — and matched me to something that checked all the boxes.",
        author: "Cybersecurity Engineer",
        location: "Houston"
    }
];
function Testimonial() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "testimonial",
        className: "py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold mb-10",
                    children: "What Our Candidates Say"
                }, void 0, false, {
                    fileName: "[project]/app/components/Testimonial.jsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
                    children: testimonials.map((t, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl shadow-lg hover:shadow-xl transition bg-white h-full flex flex-col p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faQuoteLeft"],
                                    className: "w-6 h-6 mb-4",
                                    style: {
                                        color: '#F7931E'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Testimonial.jsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-m mb-5 italic",
                                    style: {
                                        color: "#1D2452"
                                    },
                                    children: [
                                        "“",
                                        t.text,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Testimonial.jsx",
                                    lineNumber: 48,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left mt-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-gray-900",
                                            style: {
                                                color: '#F7931E'
                                            },
                                            children: t.author
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Testimonial.jsx",
                                            lineNumber: 50,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            style: {
                                                color: "#1D2452"
                                            },
                                            children: t.location
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Testimonial.jsx",
                                            lineNumber: 51,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Testimonial.jsx",
                                    lineNumber: 49,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/Testimonial.jsx",
                            lineNumber: 46,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/Testimonial.jsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Testimonial.jsx",
            lineNumber: 42,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Testimonial.jsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_c = Testimonial;
var _c;
__turbopack_context__.k.register(_c, "Testimonial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Navigation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AppBar/AppBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DarkMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DarkMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LightMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LightMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const NAVBAR_HEIGHT = 64;
const navItems = [
    [
        "Home",
        "#home"
    ],
    [
        "Career",
        "#career"
    ],
    [
        "Testimonial",
        "#testimonial"
    ],
    [
        "About",
        "#about"
    ],
    [
        "Contact",
        "#contact"
    ]
];
function Navigation({ parentToChild, modeChange }) {
    _s();
    const { mode } = parentToChild;
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleScroll = (e, id)=>{
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -NAVBAR_HEIGHT;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({
                top: y,
                behavior: "smooth"
            });
            setMobileOpen(false); // Close mobile menu after click
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/Navigation.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                component: "nav",
                sx: {
                    height: NAVBAR_HEIGHT,
                    backgroundColor: mode === "dark" ? "#1D2452" : "#ffffff",
                    color: mode === "dark" ? "#fff" : "#1D2452",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1300
                },
                elevation: 2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            minHeight: NAVBAR_HEIGHT,
                            height: NAVBAR_HEIGHT
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/logo.png",
                                alt: "Logo",
                                style: {
                                    maxHeight: "150%",
                                    cursor: "pointer"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navigation.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    display: {
                                        xs: "none",
                                        sm: "flex"
                                    },
                                    marginLeft: "auto"
                                },
                                children: [
                                    navItems.map(([label, link])=>{
                                        const id = link.replace("#", "");
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link,
                                            onClick: (e)=>handleScroll(e, id),
                                            className: "px-3 py-2 select-none outline-none font-medium",
                                            children: label
                                        }, label, false, {
                                            fileName: "[project]/app/components/Navigation.jsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: modeChange,
                                        sx: {
                                            color: mode === "dark" ? "#fff" : "#1D2452",
                                            ml: 1
                                        },
                                        children: mode === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LightMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/components/Navigation.jsx",
                                            lineNumber: 79,
                                            columnNumber: 34
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DarkMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/components/Navigation.jsx",
                                            lineNumber: 79,
                                            columnNumber: 54
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navigation.jsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navigation.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    display: {
                                        xs: "flex",
                                        sm: "none"
                                    },
                                    marginLeft: "auto"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: modeChange,
                                        sx: {
                                            color: mode === "dark" ? "#fff" : "#1D2452"
                                        },
                                        children: mode === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LightMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/components/Navigation.jsx",
                                            lineNumber: 86,
                                            columnNumber: 34
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DarkMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/components/Navigation.jsx",
                                            lineNumber: 86,
                                            columnNumber: 54
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navigation.jsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: ()=>setMobileOpen((prev)=>!prev),
                                        sx: {
                                            color: mode === "dark" ? "#fff" : "#1D2452"
                                        },
                                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/components/Navigation.jsx",
                                            lineNumber: 89,
                                            columnNumber: 29
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/components/Navigation.jsx",
                                            lineNumber: 89,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navigation.jsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navigation.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navigation.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            display: {
                                xs: "flex",
                                sm: "none"
                            },
                            flexDirection: "column",
                            backgroundColor: mode === "dark" ? "#1D2452" : "#fff",
                            color: mode === "dark" ? "#fff" : "#1D2452",
                            px: 2,
                            pb: 2,
                            borderTop: "1px solid rgba(0,0,0,0.1)"
                        },
                        children: navItems.map(([label, link])=>{
                            const id = link.replace("#", "");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link,
                                onClick: (e)=>handleScroll(e, id),
                                className: "py-2 font-medium",
                                style: {
                                    cursor: "pointer"
                                },
                                children: label
                            }, label, false, {
                                fileName: "[project]/app/components/Navigation.jsx",
                                lineNumber: 110,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navigation.jsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navigation.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    height: NAVBAR_HEIGHT
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Navigation.jsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Navigation.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Navigation, "33pz4tKGxA4/1e2zOoGo8gBQzP0=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Main$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Main.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Home$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Home.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Career$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Career.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Testimonial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Testimonial.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Navigation.jsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Navigation.jsx [app-client] (ecmascript) <export default as Navigation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Navigation.jsx [app-client] (ecmascript)");
}),
"[project]/app/components/Main.jsx [app-client] (ecmascript) <export default as Main>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Main",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Main$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Main$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Main.jsx [app-client] (ecmascript)");
}),
"[project]/app/components/Home.jsx [app-client] (ecmascript) <export default as Home>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Home",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Home$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Home$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Home.jsx [app-client] (ecmascript)");
}),
"[project]/app/components/Career.jsx [app-client] (ecmascript) <export default as Career>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Career",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Career$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Career$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Career.jsx [app-client] (ecmascript)");
}),
"[project]/app/components/About.jsx [app-client] (ecmascript) <export default as About>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About.jsx [app-client] (ecmascript)");
}),
"[project]/app/components/Contact.jsx [app-client] (ecmascript) <export default as Contact>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact.jsx [app-client] (ecmascript)");
}),
"[project]/app/components/Testimonial.jsx [app-client] (ecmascript) <export default as Testimonial>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Testimonial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Testimonial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Testimonial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Testimonial.jsx [app-client] (ecmascript)");
}),
"[project]/app/components/Footer.jsx [app-client] (ecmascript) <export default as Footer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.jsx [app-client] (ecmascript)");
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app\page.js
__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FadeIn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/FadeIn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/app/components/Navigation.jsx [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Main$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Main$3e$__ = __turbopack_context__.i("[project]/app/components/Main.jsx [app-client] (ecmascript) <export default as Main>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Home$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/app/components/Home.jsx [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Career$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Career$3e$__ = __turbopack_context__.i("[project]/app/components/Career.jsx [app-client] (ecmascript) <export default as Career>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__About$3e$__ = __turbopack_context__.i("[project]/app/components/About.jsx [app-client] (ecmascript) <export default as About>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Contact$3e$__ = __turbopack_context__.i("[project]/app/components/Contact.jsx [app-client] (ecmascript) <export default as Contact>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Testimonial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Testimonial$3e$__ = __turbopack_context__.i("[project]/app/components/Testimonial.jsx [app-client] (ecmascript) <export default as Testimonial>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footer$3e$__ = __turbopack_context__.i("[project]/app/components/Footer.jsx [app-client] (ecmascript) <export default as Footer>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function App() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const handleModeChange = ()=>{
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const path = window.location.pathname.replace("/", "");
            if (window.location.pathname !== "/") {
                window.history.replaceState(null, "", "/");
            }
            if (path && path !== "home") {
                const element = document.getElementById(path);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
    }["App.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `main-container main-hero ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                parentToChild: {
                    mode
                },
                modeChange: handleModeChange
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FadeIn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                transitionDuration: 700,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Main$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Main$3e$__["Main"], {
                        mode: mode
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Home$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {}, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Career$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Career$3e$__["Career"], {}, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Testimonial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Testimonial$3e$__["Testimonial"], {}, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__About$3e$__["About"], {}, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Contact$3e$__["Contact"], {}, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footer$3e$__["Footer"], {}, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(App, "o4hAr8T+R3XwopogBsmnZq5wWXk=");
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_e66cfd9f._.js.map