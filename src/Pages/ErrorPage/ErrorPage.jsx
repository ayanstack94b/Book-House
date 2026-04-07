import React from "react";
import { useRouteError, useNavigate } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
                <div className="card-body text-center">

                    {/* Status Code */}
                    <h1 className="text-6xl font-bold text-error">
                        {error?.status || 404}
                    </h1>

                    {/* Title */}
                    <h2 className="text-2xl font-semibold mt-2">
                        Something went wrong
                    </h2>

                    {/* Message */}
                    <p className="text-sm text-base-content/70 mt-2">
                        {error?.statusText || error?.message || "Page not found"}
                    </p>

                    {/* Actions */}
                    <div className="card-actions justify-center mt-6 gap-3">
                        <button
                            onClick={() => navigate("/")}
                            className="btn btn-primary"
                        >
                            Go Home
                        </button>

                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-outline"
                        >
                            Go Back
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ErrorPage;